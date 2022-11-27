export interface TTodoItem {
    id: string
    createdAt: string
    title: string
}

export interface Props extends Pick<TTodoItem, 'title'> {}
