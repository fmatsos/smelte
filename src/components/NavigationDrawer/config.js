export let config = {
  props: {
    hover: true,
    elevation: false,
    right: false,
    borderLeft: p => !p.elevation && p.persistent && p.right,
    borderRight: p => !p.elevation && p.persistent && !p.right,
    persistent: false
  },
  nodes: {
    root: {
      isMain: true,
      root:
        "fixed top-0 left-0 md:mt-16 w-auto drawer overflow-hidden h-full z-50",
      borderLeft: "border-gray-600 border-l",
      borderRight: "border-gray-600 border-r",
      elevation: "elevation-4",
      right: "right-0 remove:left-0",
      persistent: "pointer-events-none z-20 remove:z-50.aside"
    },
    nav: {
      root:
        "h-full w-full bg-white dark:bg-gray-900 dark:text-gray-200 absolute flex w-auto z-20 drawer pointer-events-auto overflow-y-auto"
    }
  }
};

export default config;