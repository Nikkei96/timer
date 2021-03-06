# Скрипт для таймера обратного отсчёта на ванильном JS.

**Местоположение:** *js/script.js*

## Описание:
* Событие DOMContentLoaded - начинает исполнение скрипта после полной прогрузки DOM-дерева.
* Переменные
    * deadLine - дата окончания таймера
    * timeZone - временная зона по стандарту UTC.
* Функции
    * `getTimeRemaining(endTime)` - распарсивает дату окончания таймера в **Unix time** и возвращает объект со свойствами: секунды, минуты, часы и дни, а также дельту (разницу) между текущим временем и заданным временем для окончания таймера (она необходима для остановки таймера).
        > Принимает в качестве аргумента дату окончания таймера.

    * `setClock(id, endTime)` - устанавливает таймер для элемента с указанным **id**. Вычленяет элементы с заданными классами, куда будут выводиться значения таймера и устанавливает интервал вызова функции `updateClock()`.
    Переменные: 
      - `timer` - получает элемент, в который будет отображаться таймер по id.
      - `days, hours, minutes, seconds` - получает элементы по селектору определённого класса для вывода значений в них.
      - `dayLabel` - получает подпись после кол-ва дней. Необходима для склонения слова в зависимости от кол-ва оставшихся дней.
      - `timeInterval` - function expression. Устанавливает интервал вызова функции в 1000 мс. В качестве callback принимает функцию updateClock(). 
      > Принимает в качестве аргументов id родительского элемента таймера, а также дату остановки таймера.
    * `updateClock()` - обновляет значения таймера и перезаписывает их в заданные поля черех свойство `textContent`. Вызывает внутри себя функцию `getTimeRemaining(endTime)` для получения новых значений времени. Также внутри выполнена логика для склонения дней в зависимости от их кол-ва и подстановки нуля перед значениями времени меньше 10.

<p align="center">
  <img src="./img/katana.png" />
</p>