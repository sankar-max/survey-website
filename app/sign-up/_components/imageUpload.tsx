"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    setError(null);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.onerror = () => {
        setError("An error occurred while reading the file.");
      };
      reader.readAsDataURL(file);
    } else {
      setError("Please select a valid image file.");
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFile(file);
  };

  const removeImage = () => {
    setImageUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="w-72">
      <CardContent className="p-3">
        <div
          className={`relative h-32 w-full rounded-lg text-center transition-all duration-300 ease-in-out ${
            isDragActive
              ? "border-2 border-dashed border-primary bg-primary/10"
              : "border-2 border-dashed border-gray-300 hover:border-primary"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileInput}
          />

          {!imageUrl && (
            <div className="flex h-full flex-col items-center justify-center transition-opacity duration-300 ease-in-out">
              <Upload className="h-8 w-8 text-gray-400" />
              <p className="mt-2 text-xs text-gray-600">
                Drop logo here, or click
              </p>
            </div>
          )}

          {imageUrl && (
            <div className="relative h-full w-full transition-opacity duration-300 ease-in-out">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Uploaded image preview"
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                >
                  <X className="mr-1 h-3 w-3" />
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-2 flex items-center space-x-1 text-red-600 transition-all duration-300 ease-in-out">
            <AlertCircle className="h-4 w-4" />
            <span className="text-xs">{error}</span>
          </div>
        )}

        {imageUrl && !error && (
          <div className="mt-2 flex items-center space-x-1 text-green-600 transition-all duration-300 ease-in-out">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs">Logo uploaded!</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
