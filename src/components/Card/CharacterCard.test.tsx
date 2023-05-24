import CharacterCard from "./CharacterCard";
import * as ReactDOM from 'react-dom'

describe("Navbar components test", () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        // eslint-disable-next-line testing-library/no-render-in-setup
        ReactDOM.render(<CharacterCard />, container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('renders correctly image', () => {
        // eslint-disable-next-line testing-library/no-node-access
        const list = container.querySelectorAll('img')
        expect(list).toHaveLength(1)
    })

    it('renders correctly character name', () => {
        // eslint-disable-next-line testing-library/no-node-access
        const list = container.querySelectorAll('h5')
        expect(list).toHaveLength(1)
    })

    it('renders correctly character status and species', () => {
        // eslint-disable-next-line testing-library/no-node-access
        const list = container.querySelectorAll('h6')
        expect(list).toHaveLength(2)
    })

    it('renders correctly read more', () => {
        // eslint-disable-next-line testing-library/no-node-access
        const list = container.querySelectorAll('a')
        expect(list).toHaveLength(1)
    })
})