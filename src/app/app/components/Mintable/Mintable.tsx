import { Controller, useForm } from "react-hook-form";

interface Props {
  form: ReturnType<typeof useForm>;
}

export const Mintable = ({ form }: Props) => {
  return (
    <Controller
      control={form.control}
      name="mintable"
      rules={{
        required: "This field is required",
      }}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <div className="flex items-center mb-4">
              <input
                onChange={onChange}
                id="default-radio-1"
                type="radio"
                value={"Yes"}
                checked={value === "Yes"}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-300"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                onChange={onChange}
                value={"No"}
                checked={value === "No"}
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-300"
              >
                No
              </label>
            </div>

            <p className="mt-2 text-sm text-red-600 dark:text-red-500 h-[15px]">
              {form.formState.errors.mintable?.message &&
                (form.formState.errors.mintable?.message as string)}
            </p>
          </>
        );
      }}
    />
  );
};
