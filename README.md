# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






# Things I Learnt from this project

# Currency Converter

## Project Notes

### Components

#### InputBox Component ([src/components/InputBox.jsx](./src/components/InputBox.jsx))

The `InputBox` component is designed to handle user input for currency conversion. Below are the details of its structure and usage.

- **Props:**
  - `label`: Label for the input field.
  - `amount`: Numeric value for the amount input.
  - `onAmountChange`: Callback function to handle changes in the amount input.
  - `onCurrencyChange`: Callback function to handle changes in the currency selection.
  - `currencyOptions`: Array of currency options for the dropdown.
  - `selectedCurrency`: Currently selected currency.
  - `amountDisabled`: Boolean to disable the amount input.
  - `currencyDisabled`: Boolean to disable the currency dropdown.
  - `className`: Additional CSS classes for styling.

- **Structure:**
  - The component consists of two main parts:
    1. **Amount Input:**
       - Label and input field for entering the amount.
       - Input field can be disabled based on the `amountDisabled` prop.
       - The `onAmountChange` callback is triggered on input change, ensuring the value is a number.
    2. **Currency Selector:**
       - Label and dropdown for selecting the currency.
       - Dropdown is populated with `currencyOptions`.
       - The `onCurrencyChange` callback is triggered on selection change.

- **Example Usage:**
  ```jsx
  <InputBox
    label="From"
    amount={amount}
    currencyOptions={currencyOptions}
    onCurrencyChange={(currency) => setFrom(currency)}
    onAmountChange={(amount) => setAmount(amount)}
    selectedCurrency={from}
  />
