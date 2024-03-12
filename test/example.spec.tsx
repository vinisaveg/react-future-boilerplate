import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/app/App'

describe('Example test', () => {
  it('Should log a Hello test!', () => {
    const message = 'Hello test!'

    expect(message).toBe('Hello test!')
    expect(message).not.toBe('Hello world!')
  })

  it('Should render the App component', async () => {
    const { findByText } = render(<App />)

    const app = await findByText('Reactjs Future Boilerplate')

    expect(app).toBeInTheDocument()
  })
})
