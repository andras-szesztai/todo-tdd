export interface TTodoItem {
    id: string
    createdAt: string
    title: string
    isCompleted: boolean
}

export interface Props extends Pick<TTodoItem, 'title' | 'isCompleted'> {
    onCompleteClick: () => void
}
