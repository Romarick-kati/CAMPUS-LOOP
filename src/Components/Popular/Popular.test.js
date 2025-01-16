import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // This line is crucial
import Popular from './Popular'; // Adjust the import path as necessary

describe('Popular Component', () => {
    test('renders popular hotels', () => {
        render(<Popular />);
        
        // Check if hotel names are in the document
        const hotelNames = ['Majestie Hotel', 'Tripadvise', 'WDC Aparamount', 'Mountain Hotel', 'Hall of Amelia', 'Arkahd Hauz'];
        
        hotelNames.forEach(name => {
            const hotelElement = screen.getByText(name);
            expect(hotelElement).toBeInTheDocument();
        });
    });

    test('opens modal on hotel click', () => {
        render(<Popular />);
        
        // Click on the first hotel card
        const firstHotelCard = screen.getByText('Majestie Hotel');
        fireEvent.click(firstHotelCard);
        
        // Check if the modal opens and displays the hotel name
        const modalHeader = screen.getByText('Majestie Hotel');
        expect(modalHeader).toBeInTheDocument();
    });

    test('closes modal when close button is clicked', () => {
        render(<Popular />);
        
        // Open the modal by clicking the first hotel card
        const firstHotelCard = screen.getByText('Majestie Hotel');
        fireEvent.click(firstHotelCard);
        
        // Close the modal
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
        
        // Check if the modal is closed
        expect(screen.queryByText('Majestie Hotel')).not.toBeInTheDocument();
    });
});