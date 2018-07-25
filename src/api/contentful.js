function init(callback) {
  const cfExt = window.contentfulExtension || window.contentfulWidget;
  cfExt.init(callback);
}

const mock = {
  window: {
    startAutoResizer: () => {
      console.log("api:startAutoResizer");
    }
  },
  field: {
    getValue: () => {
      return '';
    },
    setValue: value => {
      console.log("api:setValue", value);
      return Promise.resolve();
    }
  }
};

export function initApi(callback) {
  return process.env.NODE_ENV === 'development'
    ? callback(mock)
    : init(callback);
}
