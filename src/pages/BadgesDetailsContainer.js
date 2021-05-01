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
		handleCloseModal = e => {
			this.setState({ modalIsOpen:false })
		}
		handleOpenModal = e => {
			this.setState({ modalIsOpen:true })
		}
		handleDeleteBadge = async e => {
			this.setState ({loading: true, error: null})
			try {
				await api.badges.remove(
					this.props.match.params.badgeId
				)
				this.setState({ loading:false })
				this.props.history.push('/badges')
			} catch(error){
				this.setState({ loading: false, error: error })
			}
		}
		render(){
			if(this.state.loading) {
				return 'Loading...'
			}
			return (
				<BadgeDetails 
				onCloseModal={this.handleCloseModal}
				onOpenModal={this.handleOpenModal}
				modalIsOpen={this.state.modalIsOpen}
				deleteBadgeModal={this.handleDeleteBadge}
				badge={this.state.data} 
				/>
			);
		}
	}


export default BadgesDetailsContainer;
