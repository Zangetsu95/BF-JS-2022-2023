import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export const useArray = (...args) => {
    const [tab, setTab] = useState(args.map(item => ({
        id: uuidv4(),
        data: item
    })))

    const add = (content) => {
        const item = {
            id: uuidv4(),
            data: content,
        }

        setTab((tab) => [...tab, item])
    }

    return [tab, add]
}