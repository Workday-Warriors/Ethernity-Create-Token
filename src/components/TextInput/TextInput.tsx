export interface Props {
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickText?: string;
  label: string;
}

export const TextInput = ({
  placeholder,
  errorMessage,
  value,
  onChange,
  label,
  ...props
}: Props) => (
  <label>
    <span
      className={`block mb-2 text-sm font-medium ${
        errorMessage ? "text-red-700 dark:text-red-500" : "text-white"
      }`}
    >
      {label}
    </span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      id="error"
      autoComplete="off"
      className={`border bg-gray-50 h-[60px] text-xl ${
        errorMessage
          ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          : "border text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      }  text-sm rounded-lg bg-gray-700  block w-full p-2.5 `}
      placeholder={placeholder}
      {...props}
    />

    <p className="mt-2 text-sm text-red-600 dark:text-red-500 h-[15px]">
      {errorMessage}
    </p>
  </label>
);
