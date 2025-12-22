import React, { useState } from "react";
import JSZip from "jszip";
import Papa from "papaparse";

const ZipPreview = () => {
  const [csvData, setCsvData] = useState([]);
  const [images, setImages] = useState([]);
  const [zipUrl, setZipUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleZipFromUrl = async () => {
    if (!zipUrl) {
      setError("Please enter a ZIP file URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Fetch the ZIP file from URL
      const response = await fetch(zipUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch ZIP file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const zip = await JSZip.loadAsync(blob);

      const imageUrls = [];
      let csvDataTemp = [];

      for (const [path, zipEntry] of Object.entries(zip.files)) {
        // Skip directories
        if (zipEntry.dir) continue;

        // ✅ CSV file
        if (path.endsWith(".csv")) {
          const csvText = await zipEntry.async("text");
          const parsed = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
          });
          csvDataTemp = parsed.data;
        }

        // ✅ Images
        if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(path)) {
          const blob = await zipEntry.async("blob");
          const url = URL.createObjectURL(blob);
          imageUrls.push(url);
        }
      }

      setCsvData(csvDataTemp);
      setImages(imageUrls);
      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to process ZIP file"
      );
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      const zip = await JSZip.loadAsync(file);
      const imageUrls = [];
      let csvDataTemp = [];

      console.log(zip.files);

      for (const [path, zipEntry] of Object.entries(zip.files)) {
        if (zipEntry.dir) continue;

        console.log(path);

        // ✅ CSV file
        if (path.endsWith(".csv") && !path.includes("__MACOSX")) {
          const csvText = await zipEntry.async("text");
          const parsed = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
          });
          csvDataTemp = parsed.data;
        }

        // ✅ Images
        if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(path)) {
          console.log("url");

          const blob = await zipEntry.async("blob");
          const url = URL.createObjectURL(blob);
          imageUrls.push(url);

          console.log(url);
        }
      }

      console.log(imageUrls);

      setImages(imageUrls);
      setCsvData(csvDataTemp);
      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to process ZIP file"
      );
      setLoading(false);
    }
  };

  console.log(images);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ZIP Content Extractor</h1>

      {/* URL Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Enter ZIP File URL:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={zipUrl}
            onChange={(e) => setZipUrl(e.target.value)}
            placeholder="https://example.com/file.zip"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleZipFromUrl}
            disabled={loading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Extract"}
          </button>
        </div>
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Upload ZIP File:
        </label>
        <input
          type="file"
          accept=".zip"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* CSV Preview */}
      {csvData.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">CSV Data Preview</h2>
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(csvData[0]).map((key) => (
                    <th
                      key={key}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {csvData.slice(0, 10).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {Object.values(row).map((val, idx) => (
                      <td key={idx} className="px-4 py-3 text-sm text-gray-900">
                        {String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {csvData.length > 10 && (
            <p className="text-sm text-gray-500 mt-2">
              Showing 10 of {csvData.length} rows
            </p>
          )}
        </div>
      )}

      {/* Image Preview */}
      {images.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Images ({images.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={src}
                  alt={`preview-${i}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && csvData.length === 0 && images.length === 0 && !error && (
        <div className="text-center py-12 text-gray-500">
          Enter a ZIP file URL or upload a file to extract its contents
        </div>
      )}
    </div>
  );
};

export default ZipPreview;
