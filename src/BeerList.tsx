import * as React from 'react';
import Beer from './Beer';

interface Props {
    beerList: string[];
}

interface State {
    beerList: string[];
    newBeer: string;
};

export default class beerList extends React.Component<Props, State> {
    state: State = {
        beerList: this.props.beerList,
        newBeer: "",
    };

    addList = () => {
        if (this.state.newBeer === "") {
            return;
        }
        this.setState({ beerList: [...this.state.beerList, this.state.newBeer] });
        this.setState({newBeer: ""});
    };

    delteList = (index: number) => {
        this.setState({ beerList: this.state.beerList.filter((beer, i) => i !== index) });
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newBeer: event.target.value });
    };

    render() {
        return (
            <div>
                <p>Mes bières</p>
                <ul>
                    {this.state.beerList.map((beer, index) => (
                        <li><Beer index={index} nom={beer} deleteELement={this.delteList} /></li>))
                    }
                </ul>
                <input
                    type="text"
                    value={this.state.newBeer}
                    onChange={this.handleInputChange}  // Mise à jour de l'état du champ
                />
                <button onClick={this.addList}>Ajouter</button> {/* Pas de parenthèses ici */}

            </div>
        );
    }
}