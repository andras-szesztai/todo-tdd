export interface Props {
    testId: string
    text: string
    onClick: () => void
    disabled?: boolean
    size?: 'small' | 'medium'
}
