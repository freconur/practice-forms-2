import React from 'react';
import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgesDetailsContainer extends React.Component {

	state = { 
			loading: true,
			error: null,
			data: undefined,
			modalIsOpen: false,
		}

		componentDidMount () {
			this.fetchData()
		}

		fetchData = async () => {
			this.setState({ loading: true, error:null })

			try {
				const data = await api.badges.read(
					this.props.match.params.badgeId
					);
					
				this.setState({ loading: false, data: data })
			} catch (error) {
				this.setState({  loading:false, error: error })
			}
		
		}
		
		handleOpenModal = e => {
			this.setState({ modalIsOpen: true })
		};
		handleCloseModal = e => {
			this.setState({ modalIsOpen: false })
		};

		handleDeleteBadge = async e => {
			this.setState({ loading: true, error: null })
			try {
				await api.badges.remove(
					this.props.match.params.badgeId
				);
				this.setState({ loading: false })
					this.props.history.push('/badges')
			} catch (error){
				this.setState({ loading: false })
			}

		}
		render(){
			if(this.state.loading) {
				return 'Loading...'
			}
			return (
				<BadgeDetails 
				onOpenModal={this.handleOpenModal}
				onCloseModal={this.handleCloseModal}
				modalIsOpen={this.state.modalIsOpen}
				onDeleteBadge={this.handleDeleteBadge}
				badge={this.state.data}
				/>
			);
		}
	}


export default BadgesDetailsContainer;
