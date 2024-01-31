# Lightning Invoice Generator

## Description

Lightning Invoice Generator is a React-based application designed for efficient and straightforward invoice management. It provides a user-friendly interface for creating and viewing invoices, making it an ideal tool for individuals or small businesses.

## Features

- **Create Invoices**: Users can quickly generate invoices with custom amounts and descriptions.
- **Invoice List**: Easily view a list of all invoices, complete with detailed information.
- **Responsive Design**: Accessible on various devices, ensuring functionality and ease of use.

![Invoice Form Screenshot](/public/app.png)

## Usage


Replace the admin.macaroon Path in /src/components/InvoiceList.tsx
Add your LND_API_KEY and LND_API_URL in /src/components/InvoiceForm.tsx 

```npm install ```

```npm start``` 

Open `http://localhost:3000` in your web browser to use the Lightning Invoice Generator.

### Creating an Invoice

1. Click 'Create Invoice'.
2. Fill in the amount and description.
3. Click 'Submit' to generate the invoice.

### Viewing Invoices

- All generated invoices are listed on the main screen.

## Technologies Used

- **React**
- **Axios** for API interactions to your node
- **CSS** for styling

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin new-feature`.
5. Submit a pull request.


## Contact

- Paolig Blan - blan.p@laposte.net
