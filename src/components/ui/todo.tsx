import { todo } from "node:test";

export default function Todo() {
    "belajar event handler",
});

function handleInput(e: any) {
    setInputTodo(e.target.value);
}

function addTodo(e: any) {
    e.preventDefault();
    setTodo([...todo, inputTodo]);
    setInputTodo("");
}

return (
    <div>
        <form action="">
            <input type="text" />
            <button></button>
        </form>
    </div>
)