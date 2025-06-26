import { useState, useEffect } from "react";
import ExtensionCard from "./ExtensionCard";

export interface Extension {
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
}

interface ExtensionsGridProps {
  filter: number;
}

const ExtensionsGrid = ({ filter }: ExtensionsGridProps) => {
  const [extensionsData, setExtensionsData] = useState<Extension[] | null>(
    null
  );
  // Used for updating the visual list after clicking on remove
  const [lastRemoved, setLastRemoved] = useState("");

  /* Fetches the initial values of the extensions in the data.json */
  useEffect(() => {
    async function fetchExtensions() {
      try {
        const res = await fetch("data.json");
        let data = await res.json();
        setExtensionsData(data);
        localStorage.setItem("extensions", JSON.stringify(data));
      } catch (err) {
        console.log("Failed to fetch data.json", err);
      }
    }
    fetchExtensions();
  }, []);

  /* Filters out the latest localStorage data based on the selected filter,
    filter = 0 for All, filter = 1 for Active, filter = 2 for Inactive */
  useEffect(() => {
    let stored: Extension[] =
      JSON.parse(localStorage.getItem("extensions") || "[]") || [];

    if (filter === 1)
      stored = stored.filter((extension: Extension) => extension.isActive);
    else if (filter === 2)
      stored = stored.filter((extension: Extension) => !extension.isActive);

    setExtensionsData(stored);
  }, [filter, lastRemoved]);

  return (
    <div id="extensions-grid">
      {extensionsData &&
        extensionsData.map((extension) => (
          <ExtensionCard
            key={extension.name}
            extension={extension}
            setLastRemoved={setLastRemoved}
          />
        ))}
    </div>
  );
};

export default ExtensionsGrid;
