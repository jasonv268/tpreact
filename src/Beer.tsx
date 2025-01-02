import * as React from 'react';

interface Props {
    deleteELement: (index: number) => void, // Fonction reçue en prop
    index: number,
    nom: string,
}

class Beer extends React.Component<Props> {

    deleteElement = () => {
        this.props.deleteELement(this.props.index);
    };

    render() {
        return <div>
            <h1>{this.props.nom}</h1>
            <button onClick={this.deleteElement}>Supprimer</button>
        </div>;
    }
};

export default Beer;