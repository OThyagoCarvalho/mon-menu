import { render, screen } from '@testing-library/react';
import GreetingsBlock from '../components/dashboard/blocks/greetingsBlock/GreetingsBlock';

// We'll be testing all components in the Dashboard Home Page
describe('Dashboard Home Page components', () => {
    
  describe('Greetings Component Block', () => {
        it('Should render the the name of the greeted user', () => {
            // Render the component with the name of the user
            // Arrange
            render(
                <GreetingsBlock name="John Doe" />
            );
            const name = screen.getByText('John Dole');

            // Assert
            expect(name).toBeInTheDocument;
        });

        it('Should render the motto of the greeted user', () => {
            // Arrange
            render(
                <GreetingsBlock name="John Doe" motto="John's Best Recipes!" />
            );
            const motto = screen.getByText("John's Best Recipes!");

            // Assert
            expect(motto).toBeInTheDocument;
        });
    });
});
