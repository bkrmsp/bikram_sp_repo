import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Todo from '../Todo';

afterEach(() => {
    cleanup();
})
test('should render Completed Todo', () => {
    const todoItem = { id: 1, text: 'Eat food', isCompleted: true };
    render(<Todo todo={todoItem} />);
    const todoElement = screen.getByTestId(`todo-${ todoItem.id }`);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(`${ todoItem.text }`);
    expect(todoElement).toContainHTML('strike')
});

test('should render Incomplete Todo', () => {
    const todoItem = { id: 2, text: 'Go to sleep', isCompleted: false };
    render(<Todo todo={todoItem} />);
    const todoElement = screen.getByTestId(`todo-${ todoItem.id }`);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(`${ todoItem.text }`);
    expect(todoElement).not.toContainHTML('strike')
});

test('match snapshot', () => {
    const todoItem = { id: 1, text: 'Eat food', isCompleted: true };
    const tree = renderer.create(<Todo todo={todoItem} />).toJSON();
    expect(tree).toMatchSnapshot(tree);
})