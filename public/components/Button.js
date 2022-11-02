import { Icon } from './Icon.js';
export var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children;
  return React.createElement("button", {
    disabled: disabled
  }, React.createElement("span", null, children), React.createElement(Icon, {
    path: children,
    disabled: disabled
  }));
};
//# sourceMappingURL=Button.js.map