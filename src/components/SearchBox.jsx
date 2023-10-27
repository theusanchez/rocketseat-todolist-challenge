import React from "react";
import style from './SearchBox.module.css'
import { PlusCircle } from "@phosphor-icons/react";

export function SearchBox() {
    return (
        <form>
            <input className={style.searchBox} type='text' placeholder="Insira sua tarefa!"></input>
            <button>
                Criar
                <span><PlusCircle size={24} /></span>
            </button>
        </form>
    )
}