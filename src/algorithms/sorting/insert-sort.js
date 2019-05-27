/**
 * Insertion sorting algorithm for doubly linked list implementation
 */

const {DoublyLinkedList} = require('../../data-structures/doubly-linked-list.js');

/**
 * 
 * @param {Object} source
 * @param {Object} target
 */
function compareAsc(source, target) {
    return target.value > source.value && (target.prev && target.prev.value < source.value || !target.prev);
}

/**
 * 
 * @param {Object} source
 * @param {Object} target
 */
function compareDesc(source, target) {
    return target.value < source.value && (target.prev && target.prev.value > source.value || !target.prev);
}

/**
 * 
 */
class LinkedListWithInsertSorting extends DoublyLinkedList {

    /**
     * 
     */
    constructor() {
        super();
        this.compareAsc = compareAsc;
        this.compareDesc = compareDesc;
    }

    sortAsc(){
        this.sort(this.compareAsc);
    }

    sortDesc(){
        this.sort(this.compareDesc);
    }

    /**
     * Insert sorting
     * @private
     */
    sort(compare) {
        let current = this.head.next;

        while (current) {

            const currentPrev = current.prev;
            const currentNext = current.next;

            let target = current.prev;

            while (target) {

                if (compare(current, target)) {

                    const targetPrev = target.prev;

                    // check if target is a head
                    if (!target.prev) {
                        this.head = current;
                    }

                    // check if current is a tail
                    if (!current.next) {
                        this.tail = currentPrev;
                    }

                    currentPrev.next = currentNext;
                    if (currentNext) {
                        currentNext.prev = currentPrev;
                    }
                    if (targetPrev) {
                        targetPrev.next = current;
                    }
                    current.prev = targetPrev;
                    current.next = target;
                    target.prev = current;
                    break;
                }

                // move to previous element
                target = target.prev;
            }

            // move to next element
            current = currentNext;
        }
    }
}

module.exports = {LinkedListWithInsertSorting}

const dll = new LinkedListWithInsertSorting();

dll.add(3);
dll.add(2);
dll.add(3);
dll.add(1);
dll.add(4);

dll.traverse();
dll.sortAsc();
dll.traverse();
dll.sortDesc();
dll.traverse();