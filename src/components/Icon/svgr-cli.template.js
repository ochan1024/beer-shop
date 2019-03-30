function template({ template }, opts, { imports, componentName, jsx }) {
  const typeScriptTpl = template.smart({
    plugins: ["typescript", "classProperties"]
  });
  return typeScriptTpl.ast`
    ${imports}
    import { IconProps } from '../index';

    export default class ${componentName} extends React.PureComponent<IconProps> {
      public static defaultProps: Partial<IconProps> = {
        fillColor: '#6e6e78',
        size: 24,
      };
      public render() {
        return (
          ${jsx}
        );
      }
    }
  `;
}

module.exports = template;
