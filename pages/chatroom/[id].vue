<template>
		<div id="chatroom" class="mx-auto my-auto text-white">
			<div id="chatroom-top" class="d-flex justify-content-between max-text">
				<div id="title-chatroom-top">	
					{{room_name}}
				</div>
				<div class="dropdown custom-dropdown nav-link menu-text"
            :class="isService ? 'extra-bold-text' : 'semi-bold-text'">
            <button class="dropdown-link" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="true" data-offset="-70,20">{{cur_user}}</button>
            <ul class="dropdown-menu">
              <li v-for="user of users">
                <button @click="setUser(user.id, user.username)/*; setText(user.id, user.username)*/">{{ user.username }}</button>
              </li>
            </ul>
        </div>
				<NuxtLink to="/"><font-awesome-icon id="icon-chatroom-top" icon="fa-solid fa-xmark"/></NuxtLink>
			</div>
			<div id="chatroom-messages" class="row row-cols-1 min-text my-auto">
				<!-- <div class="frame-chatroom-chat col">
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
				</div> -->
			</div>
			<div id="chatroom-input" class="d-flex justify-content-between min-text">
				<input type="text" id="message-chatroom-input" placeholder="Type a message here..."/>
				<button type="submit" @click="sendMessage(cur_user_id)"><font-awesome-icon id="button-chatroom-input" icon="fa-solid fa-paper-plane"/></button>
			</div>
		</div>
</template>



<script>
	export default {
		async mounted(){
      var user_id = await useFetch('http://127.0.0.1:3001/api/v1/users/7')
      user_id = user_id.data._value.data.id
			const messages = await useFetch("http://127.0.0.1:3001/api/v1/room_messages?room_id=" + useRoute().params.id);
			console.log(messages.data._value.data.length)
			for (let message of messages.data._value.data) {
				let username = await useFetch("http://127.0.0.1:3001/api/v1/users/" + message.user_id)
				var displayMessages = ""
				displayMessages += "<div class='frame-chatroom-chat col'><div class="
				if (message.user_id == user_id) {
					displayMessages += "'row chatroom-chat float-end'"
				} else {
					displayMessages += "'row chatroom-chat-others float-start'"
				}
				displayMessages += "><div class='user-chatroom-chat semi-bold-text'>"
				username = username.data._value.data.username
				displayMessages += username
				displayMessages += "</div><div class='text-chatroom-chat min-text'>"
				displayMessages += message.message
				displayMessages +="</div></div></div>"
				document.querySelector('#chatroom-messages').innerHTML += displayMessages

			}
			
		},
		methods: {
			// setText(input_user_id, input_username) {
			// 	document.querySelector(".dropdown-link").innerHTML = document.querySelector(".dropdown-link").innerHTML.replace(document.querySelector(".dropdown-link").innerHTML, input_username)
			// 	this.loadMessage()
			// },
			async sendMessage(user_id) {
				if (document.querySelector('#message-chatroom-input').value != ""){
					const {data: response} = await useFetch('http://127.0.0.1:3001/api/v1/room_messages', {
						method: 'post',
						body: {
							room_id: useRoute().params.id,
							user_id: user_id,
							message: document.querySelector('#message-chatroom-input').value
						}
					})
					console.log(user_id)
					document.querySelector('#message-chatroom-input').value = document.querySelector('#message-chatroom-input').value.replace(document.querySelector('#message-chatroom-input').value, "")
				}
			},
			async loadMessage(user_id) {
				document.querySelector('#chatroom-messages').innerHTML = document.querySelector('#chatroom-messages').innerHTML.replace(document.querySelector('#chatroom-messages').innerHTML, "")
				const {data: messages} = await useFetch("http://127.0.0.1:3001/api/v1/room_messages?room_id=" + useRoute().params.id);
				for (let message of messages._value.data) {
					let {data: username} = await useFetch("http://127.0.0.1:3001/api/v1/users/" + message.user_id)
					var displayMessages = ""
					displayMessages += "<div class='frame-chatroom-chat col'><div class="
					if (message.user_id == user_id) {
						displayMessages += "'row chatroom-chat float-end'"
					} else {
						displayMessages += "'row chatroom-chat-others float-start'"
					}
					displayMessages += "><div class='user-chatroom-chat semi-bold-text'>"
					username = username._value.data.username
					displayMessages += username
					displayMessages += "</div><div class='text-chatroom-chat min-text'>"
					displayMessages += message.message
					displayMessages +="</div></div></div>"
					document.querySelector('#chatroom-messages').innerHTML += displayMessages
				}
			},
		}
	}

</script>

<script setup>

		async function loadMessage() {
				document.querySelector('#chatroom-messages').innerHTML = document.querySelector('#chatroom-messages').innerHTML.replace(document.querySelector('#chatroom-messages').innerHTML, "")
				const {data: messages} = await useFetch("http://127.0.0.1:3001/api/v1/room_messages?room_id=" + useRoute().params.id);
				var displayMessages = ""
				for (let message of messages._value.data) {
					let {data: username} = await useFetch("http://127.0.0.1:3001/api/v1/users/" + message.user_id)
					
					displayMessages += "<div class='frame-chatroom-chat col'><div class="
					if (message.user_id == cur_user_id) {
						displayMessages += "'row chatroom-chat float-end'"
					} else {
						displayMessages += "'row chatroom-chat-others float-start'"
					}
					displayMessages += "><div class='user-chatroom-chat semi-bold-text'>"
					username = username._value.data.username
					displayMessages += username
					displayMessages += "</div><div class='text-chatroom-chat min-text'>"
					displayMessages += message.message
					displayMessages +="</div></div></div>"
					
				}
				document.querySelector('#chatroom-messages').innerHTML = document.querySelector('#chatroom-messages').innerHTML.replace(document.querySelector('#chatroom-messages').innerHTML, displayMessages)
			}
		function setUser(input_user_id, input_username) {
			cur_user = input_username
			cur_user_id = input_user_id
			document.querySelector(".dropdown-link").innerHTML = document.querySelector(".dropdown-link").innerHTML.replace(document.querySelector(".dropdown-link").innerHTML, input_username)
			loadMessage()
		}
		function createSocket() {
			const socket_url = "ws://127.0.0.1:3001/cable"
			const socket = new WebSocket(socket_url)
			
			socket.onopen = function(event) {
				console.log("Connected to server");
				const msg = {
					command: 'subscribe',
					identifier: JSON.stringify({
						channel: 'MessagesChannel'
					})
				}
				socket.send(JSON.stringify(msg))
			}

			socket.onmessage = function(event) {
				const data = JSON.parse(event.data)
				if (data.type === "ping") {return}
				console.log("Received data from server", data)
				if (data.type === undefined) {
					loadMessage()
				}
			}

			socket.onclose = function(event) {
				console.log("Disconnected from server")
			}

			socket.onerror = function(error) {
				console.log("Websocket error observed: ", error)
			}
		}

		var {data: users} =  await useFetch('http://127.0.0.1:3001/api/v1/users')
		var {data: cur_user} = ""
		var {data: cur_user_id} = await useFetch('http://127.0.0.1:3001/api/v1/users/7')
		var {data: room_name} = await useFetch('http://127.0.0.1:3001/api/v1/rooms/' + useRoute().params.id)
		cur_user = users._value.data[0].username
		users = users._value.data
		cur_user_id = cur_user_id._value.data.id
		room_name = room_name._value.data.name
		if (process.client) {
			createSocket()
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
		.dropdown-link {
			font-size: 6vw;
		}
		.dropdown-menu > li {
			font-size: 5.4vw;
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
		.dropdown-link {
			font-size: 3vw;
		}
		.dropdown-menu > li {
			font-size: 2.7vw;
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
		.dropdown-link {
			font-size: 2vw;
		}
		.dropdown-menu > li {
			font-size: 1.8vw;
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
	.dropdown-menu {
		padding: 0;
	}
	.dropdown-menu > li {
		color: #FF3333;
		background-color: #333333;
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
		max-width: 60%;
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