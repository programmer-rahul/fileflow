import { MAXIMUM_FILES_SIZE } from "./constants";

export class LocalStorage {
  static get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}


export const checkTotalFilesSize = (files: FileList) => {
  let totalSize = 0;
  if (files.length) {
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }
  }
  totalSize = totalSize / (1024 * 1024);
  console.log("Total File Size: " + totalSize);
  return MAXIMUM_FILES_SIZE >= totalSize;
};
