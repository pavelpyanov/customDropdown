import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import useStyles from "./styles";

export type DropDownChangeEvent = {
  target: { value: string; name: string | undefined };
};

interface IDropDownProps {
  options: string[];
  value?: string;
  onChange?: (e: DropDownChangeEvent) => void;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

const DropDown: React.FC<IDropDownProps> = ({
  options,
  value: propsValue,
  inputProps,
  onChange,
}) => {
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);
  const optionsListRef = useRef<HTMLUListElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(0);

  const value = propsValue || dropdownValue;

  const openDropDown = () => {
    setIsOpen(true);
    inputRef.current!.focus();

    let currentIndex = options.findIndex((item) => item === value);
    if (currentIndex < 0) currentIndex = 0;
    setFocusedOptionIndex(currentIndex);
  };

  const goToCurrentOption = (index: number) => {
    const focusedNode = optionsListRef.current?.children[
      index
    ] as HTMLLIElement;
    if (focusedNode) {
      focusedNode.scrollIntoView({ block: "center" });
    }
  };

  const onOpenDropDown: MouseEventHandler = (event) => {
    event.stopPropagation();
    openDropDown();
  };

  const onCloseDropDown: MouseEventHandler = (event) => {
    event.stopPropagation();
    setIsOpen(false);
    inputRef.current!.blur();
  };

  const onChangeOption: KeyboardEventHandler = async (event) => {
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        if (focusedOptionIndex + 1 <= options.length - 1) {
          setFocusedOptionIndex(focusedOptionIndex + 1);
        }
        break;
      case "Up":
      case "ArrowUp":
        if (focusedOptionIndex - 1 >= 0) {
          setFocusedOptionIndex(focusedOptionIndex - 1);
        }
        break;
      case "Enter":
        if (!isOpen) {
          openDropDown();
          return;
        }

        onChange &&
          onChange({
            target: {
              value: options[focusedOptionIndex],
              name: inputRef.current?.name,
            },
          });

        setDropdownValue(options[focusedOptionIndex]);

        setIsOpen(false);
        inputRef.current!.blur();
        break;
      case "Esc":
      case "Escape":
      case "Tab":
        setIsOpen(false);
        inputRef.current!.blur();
        break;

      default:
        return;
    }
  };

  const onClickOption = (item: string) => {
    setDropdownValue(item);
    onChange &&
      onChange({
        target: {
          value: item,
          name: inputRef.current?.name,
        },
      });
  };

  useEffect(() => {
    goToCurrentOption(focusedOptionIndex);
  }, [focusedOptionIndex]);

  return (
    <div
      className={classes.inputWrapper}
      onClick={onOpenDropDown}
      onKeyDown={onChangeOption}
    >
      <input
        className={`${classes.input} ${isOpen ? "open" : ""}`}
        {...inputProps}
        value={value}
        ref={inputRef}
        readOnly
        onChange={() => {}}
      />
      <span className={classes.icon} />
      <ul
        ref={optionsListRef}
        onClick={onCloseDropDown}
        className={`${classes.optionsList} ${isOpen ? "show" : ""}`}
      >
        {options.map((item, index) => {
          const cls = [classes.option];
          item === value && cls.push("checked");
          index === focusedOptionIndex && cls.push("focus");
          return (
            <li
              className={cls.join(" ")}
              key={item}
              onClick={() => onClickOption(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {isOpen && <div onClick={onCloseDropDown} className={classes.overlay} />}
    </div>
  );
};

export default DropDown;
