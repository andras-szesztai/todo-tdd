export interface Props {
    text: string
    onClick: () => void
    disabled?: boolean
    size?: 'small' | 'medium'
    onFocus?: () => void
    onBlur?: () => void
}
