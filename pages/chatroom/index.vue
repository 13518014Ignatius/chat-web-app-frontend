<template>
		<div id="chatroom" class="mx-auto my-auto text-white">
			<div id="chatroom-top" class="d-flex justify-content-between max-text">
				<div id="title-chatroom-top">	
					Chatroom Name
				</div>
				<button><font-awesome-icon id="icon-chatroom-top" icon="fa-solid fa-xmark"/></button>
			</div>
			<div id="chatroom-messages" class="row row-cols-1 min-text my-auto">
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat-others float-start">
						<div class="user-chatroom-chat semi-bold-text">
							Name 2
						</div>
						<div class="text-chatroom-chat min-text">
							This is a chat 1 This is the second line this is the third line
						</div> 
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat float-end">
						<div class="user-chatroom-chat semi-bold-text">
							Name 2
						</div>
						<div class="text-chatroom-chat min-text">
							This is a chat 1 This is the second line this is the third line
						</div> 
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat-others float-start">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat float-end">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat-others float-start">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat float-end">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat-others float-start">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat float-end">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat-others float-start">
						This is a chat 1
					</div>
				</div>
				<div class="frame-chatroom-chat col">
					<div class="row chatroom-chat float-end">
						This is a chat 1
					</div>
				</div>
			</div>
			<div id="chatroom-input" class="d-flex justify-content-between min-text">
				<input type="text" id="message-chatroom-input" placeholder="Type a message here..."/>
				<button type="submit" @click="logConsole"><font-awesome-icon id="button-chatroom-input" icon="fa-solid fa-paper-plane"/></button>
			</div>
		</div>
</template>

<script>
	export default {
		methods: {
			logConsole() {
				document.querySelector('#chatroom-messages').innerHTML += "<div class='frame-chatroom-chat col'><div class='row chatroom-chat float-end'>" + document.querySelector('#message-chatroom-input').value + "</div></div>"
				document.querySelector('#message-chatroom-input').value = document.querySelector('#message-chatroom-input').value.replace(document.querySelector('#message-chatroom-input').value, "")
			}
		}
	}

</script>

<style>
	/*sm => Smartphones*/
	@media (max-width: 767.98px) {
		.chatroom-chat-others, .chatroom-chat {
			max-width: 80vw;
			width: max-content;
			padding: 3vw;
			border-radius: 3vw;
			margin-bottom: 6vw;
		}

		#chatroom {
			width: 98vw;
			height: 98vh;
			border-radius: 3vw;
			box-shadow: 0 1.5vw 9vw rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(0.3vw);
			-webkit-backdrop-filter: blur(0.3vw);
		}
		#chatroom-top {
			border-radius: 3vw 3vw 0 0;
			font-size: 7.5vw;
			padding: 2vw 4vw 2vw 4vw;
		}
		#icon-chatroom-top {
			position: relative;
			top: 0.6vw;
			font-size: 7.5vw;
			padding: 0 3vw 0 3vw;
		}
		#chatroom-top > button {
			border-radius: 3vw;
		}
		#chatroom-messages {
			height: calc(85vh - 10vw);
			padding: 3.75vh 5vw 3.75vh 5vw;
			font-size: 4.5vw;
		}
		#chatroom-input {
			border-radius: 0 0 3vw 3vw;
			padding: 2vh 6vw 2vh 6vw;
			font-size: 6vw;
			width: 100%;
		}
		#message-chatroom-input {
			border-radius: 3vw;
		}
		#chatroom-input > button {
			padding: 1.5vw 3vw 1.5vw 3vw;
			border-radius: 3vw;
		}
  }
  /*md to lg => Tablets*/
  @media (min-width: 768px) and (max-width: 1199.98px) {
		.chatroom-chat-others, .chatroom-chat {
			max-width: 72vw;
			width: max-content;
			padding: 1.5vw;
			border-radius: 1.5vw;
			margin-bottom: 3vw;
		}
		
		#chatroom {
			width: 94vw;
			height: 94vh;
			border-radius: 1.5vw;
			box-shadow: 0 0.75vw 4.5vw rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(0.15vw);
			-webkit-backdrop-filter: blur(0.15vw);
		}
		#chatroom-top {
			border-radius: 1.5vw 1.5vw 0 0;
			font-size: 3.75vw;
			padding: 1.5vw 3vw 1.5vw 3vw;
		}
		#chatroom-top > button {
			border-radius: 1.5vw;
		}
		#icon-chatroom-top {
			position: relative;
			top: 0.3vw;
			font-size: 3.75vw;
			padding: 0 1.5vw 0 1.5vw;
		}
		#chatroom-messages {
			height: calc(90vh - 10vw);
			padding: 7.5vh 3.75vw 7.5vh 3.75vw;
			font-size: 2.25vw;
		}
		#chatroom-input {
			border-radius: 0 0 1.5vw 1.5vw;
			padding: 2vh 3vw 2vh 3vw;
			font-size: 3vw;
			width: 100%;
		}
		#message-chatroom-input {
			border-radius: 1.5vw;
		}
		#chatroom-input > button {
			padding: 0.75vw 1.5vw 0.75vw 1.5vw;
			border-radius: 1.5vw;
		}
	}
  /*xl to xxl => Desktops, TV*/
  @media (min-width: 1200px) {
		.chatroom-chat-others, .chatroom-chat {
			max-width: 64vw;
			width: max-content;
			padding: 1vw;
			border-radius: 1vw;
			margin-bottom: 2vw;
		}

		#chatroom {
			width: 90vw;
			height: 90vh;
			border-radius: 1vw;
			box-shadow: 0 0.5vw 3vw rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(0.1vw);
			-webkit-backdrop-filter: blur(0.1vw);
		}
		#chatroom-top {
			border-radius: 1vw 1vw 0 0;
			font-size: 2.5vw;
			padding: 1vw 2vw 1vw 2vw;
		}
		#chatroom-top > button {
			border-radius: 1vw;
		}
		#icon-chatroom-top {
			position: relative;
			top: 0.2vw;
			font-size: 2.5vw;
			padding: 0 1vw 0 1vw;
		}
		#chatroom-messages {
			height: calc(95vh - 10vw);
			padding: 10vh 5vw 10vh 5vw;
			font-size: 1.5vw;
		}
		#chatroom-input {
			border-radius: 0 0 1vw 1vw;
			padding: 2vh 2vw 2vh 2vw;
			font-size: 2vw;
			width: 100%;
		}
		#message-chatroom-input {
			border-radius: 1vw;
		}
		#chatroom-input > button {
			padding: 0.5vw 1vw 0.5vw 1vw;
			border-radius: 1vw;
		}
  }
	.frame-chatroom-chat {
		width: 100%;
	}
	.chatroom-chat-others {
		background: #333333;
	}
	.chatroom-chat {
		background: #FF3333;
	}

	#bg-chatroom {
		background-image: url('/images/main-background.jpg');
		background-size: cover;
		height: 100vh;
	}
	#chatroom {
		background: rgba(0, 0, 0, 0.85);
	}
	#chatroom-top {
		background: #1A1A1A;
		color: #FF3333;
	}
	#title-chatroom-top {
		max-width: 80%;
		-webkit-line-clamp: 1;
  	overflow: hidden;
  	display: -webkit-box;
  	-webkit-box-orient: vertical;
	}

	#chatroom-messages {
		overflow: auto;
		-ms-overflow-style: none;
  		scrollbar-width: none; 
	}
	#chatroom-messages::-webkit-scrollbar {
		display: none;
	}
	#chatroom-input {
		position: absolute;
		bottom: 0;
		background: #1A1A1A;
	}
	#chatroom-input > button:hover, #chatroom-top > button:hover {
		background: #333333;
	}
	#chatroom-input > button:active, #chatroom-top > button:active {
		color: white;
	}
	#message-chatroom-input {
		border: 0;
		background: #1A1A1A;
		color: white;
		width: 80%;
	}
	#message-chatroom-input::placeholder, #chatroom-input > button {
		color: #FF3333;
	}
</style>