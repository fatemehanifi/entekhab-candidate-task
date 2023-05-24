import Header from "./Header";
// import { render, fireEvent } from "@testing-library/react";
import * as ReactDOM from 'react-dom'

describe("Navbar components test", () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        // eslint-disable-next-line testing-library/no-render-in-setup
        ReactDOM.render(<Header />, container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('renders correctly initial document', () => {
        // eslint-disable-next-line testing-library/no-node-access
        const list = container.querySelectorAll('img')
        expect(list).toHaveLength(1)
    })
})