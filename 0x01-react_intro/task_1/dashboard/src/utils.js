// task_1/dashboard/src/utils.js

// Function to get the current year
export function getFullYear() {
    return new Date().getFullYear();
  }
  
  // Function to get footer text based on isIndex
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  