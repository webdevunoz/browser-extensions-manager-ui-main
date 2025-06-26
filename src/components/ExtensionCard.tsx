import type { Extension } from "./ExtensionsGrid";

interface ExtensionCardProps {
  extension: Extension;
  setLastRemoved: (extensionName: string) => void;
}

const ExtensionCard = ({ extension, setLastRemoved }: ExtensionCardProps) => {
  /* Handles the remove button click, if clicked on it's removed from the localStorage, 
    then notifies UseEffect of new lastRemoved value to update visual list */
  const handleRemoveExtension = (extensionName: string) => {
    const stored: Extension[] =
      JSON.parse(localStorage.getItem("extensions") || "[]") || [];

    let updated = stored.filter((ext) => ext.name !== extensionName);

    localStorage.setItem("extensions", JSON.stringify(updated));
    setLastRemoved(extensionName);
  };

  /* Handles the active status of an extension, after clicking on the switch, 
    it's active status is updated in localStorage to true or false */
  const handleActiveStatus = (extensionName: string) => {
    const stored: Extension[] =
      JSON.parse(localStorage.getItem("extensions") || "[]") || [];

    const updated = stored.map((ext) =>
      ext.name === extensionName ? { ...ext, isActive: !ext.isActive } : ext
    );

    localStorage.setItem("extensions", JSON.stringify(updated));
  };

  return (
    <div className="extension-card">
      <div className="extension-info">
        <img
          src={extension.logo}
          alt={`A logo of the ${extension.name} extension`}
        />
        <div className="extension-details">
          <h3 className="extension-name text-preset-2">{extension.name}</h3>
          <p className="extension-description text-preset-5">
            {extension.description}
          </p>
        </div>
      </div>
      <div className="extension-actions">
        <button
          className="extension-remove-button text-preset-6"
          onClick={() => handleRemoveExtension(extension.name)}
        >
          Remove
        </button>
        <label className="switch">
          <input
            type="checkbox"
            id="mySwitch"
            defaultChecked={extension.isActive}
            onClick={() => handleActiveStatus(extension.name)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
