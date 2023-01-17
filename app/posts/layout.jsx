import { Counter } from "./Counter";

export default function PostsLayout ({ children }) {
    return (
        <div>
            <small>Estoy en la vista de post</small>

            {children}
        </div>
    )
}