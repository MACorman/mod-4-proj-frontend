import React from 'react'

class FilterAndSearch extends React.Component {
    render() {
        return(
            <div>
                <button>Filter</button>
                <form>
                    <input type="text" placeholder="Search for an Item" />
                </form>
            </div>
        )
    }
}

export default FilterAndSearch