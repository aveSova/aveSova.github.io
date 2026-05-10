declare module '*.jsx' {
  const component: React.ComponentType<any>;
  export default component;
}

declare module '*.css' {
  const content: string;
  export default content;
}