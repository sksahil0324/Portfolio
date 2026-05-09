import { useState, useEffect } from "react";

const PHOTO_KEY = "sahil_profile_photo";

export function useProfilePhoto() {
  const [photo, setPhotoState] = useState<string | null>(() => {
    try { return localStorage.getItem(PHOTO_KEY); } catch { return null; }
  });

  const setPhoto = (dataUrl: string) => {
    setPhotoState(dataUrl);
    try { localStorage.setItem(PHOTO_KEY, dataUrl); } catch {}
  };

  const removePhoto = () => {
    setPhotoState(null);
    try { localStorage.removeItem(PHOTO_KEY); } catch {}
  };

  return { photo, setPhoto, removePhoto };
}
