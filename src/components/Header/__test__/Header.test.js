import { render, screen } from '@testing-library/react';
import Header from '../Header'

// get by

describe('Header', () => {
    test('should render same text passed into title prop', () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
})


// test('should render same text passed into title prop', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole('heading', { name: 'My Header' });
//     expect(headingElement).toBeInTheDocument();
// });

// test('should render same text passed into title prop', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle('Header');
//     expect(headingElement).toBeInTheDocument();
// });

// test('should render same text passed into title prop', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId('header-2');
//     expect(headingElement).toBeInTheDocument();
// });

// // find by (async)

// test('should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// });

// // query

// test('should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
// });

// // get all

// test('should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElements = screen.getAllByRole('heading');
//     expect(headingElements.length).toBe(2)
// });