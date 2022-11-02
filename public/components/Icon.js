var emojis = {
  업로드: '../assets/icons/type=up-arrow.svg',
  '업로드 중': '../assets/icons/type=spinner-animate.svg',
  완료: '../assets/icons/type=check-mark.svg',
  실패: '../assets/icons/type=cross.svg',
  disabled: '../assets/icons/type=not-allowed.svg'
};
export var Icon = function Icon(_ref) {
  var disabled = _ref.disabled,
      path = _ref.path;
  return React.createElement("img", {
    src: disabled ? emojis['disabled'] : emojis[path],
    alt: path
  });
};
//# sourceMappingURL=Icon.js.map