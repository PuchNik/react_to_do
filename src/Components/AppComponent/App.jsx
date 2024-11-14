import './App.module.css'
import styles from './App.module.css'
import {useState} from "react";

export default function App() {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])
    const [error, setError] = useState('')
    const [isValueValid, setIsValueValid] = useState(false)

    const onInputButtonClick = () => {
        const promptValue = prompt('Введите текст: ')
        if (promptValue.length < 3) {
            setError('Введенное значение должно содержать минимум 3 символа')
            setIsValueValid(false)
        } else if (error !== '') {
            setError('');
            setIsValueValid(true);
            setValue(promptValue);
        } else {
            setIsValueValid(true);
            setValue(promptValue);
        }

    }

  return (
    <>
      <div className={styles.app}>
          <h1 className={styles.pageHeading}>Ввод значения</h1>
          <p className={styles.noMarginText}>
              Текущее значение <code>value</code>:
              <output className={styles.currentValue}> {value} </output>
          </p>
          <div className={styles.error}>{error}</div>
          <div className={styles.buttonsContainer}>
              <button onClick={onInputButtonClick} className={styles.button}>Ввести новое</button>
              <button className={styles.button} disabled={!isValueValid}>Добавить в список</button>
          </div>
          <div className={styles.listContainer}>
              <h2 className={styles.listHeading}>Список:</h2>
              <p className={styles.noMarginText}>Нет добавленных элементов</p>
              <ul className={styles.list}>
                  <li className={styles.listItem}>Первый элемент</li>
              </ul>
          </div>
      </div>
    </>
)
}