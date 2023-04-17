<template>
		<div id="main" class="mx-auto my-auto text-white">
			<div id="main-top" class="d-flex justify-content-between max-text">
				<div id="title-main-top">	
					Enter a Chatroom
				</div>
			</div>
			<div id="main-chatrooms" class="row row-cols-1 min-text my-auto">
				<div class="main-chatroom">
          <div class="text-main-chatroom">
            {{ chatrooms }}
          </div>
        </div>
			</div>
			<div id="main-input" class="d-flex justify-content-between min-text">
				<input type="text" id="message-main-input" placeholder="Type a new chatroom name..."/>
				<button type="submit" class="max-text">Create Chatroom</button>
			</div>
		</div>
</template>

<script>
  export default {
    async mounted() {
      var {data: chatrooms} = await useFetch('http://127.0.0.1:3001/api/v1/rooms')
      chatrooms = chatrooms._value.data
      var chatroomsContent = ""
      for (let chatroom of chatrooms) {
        console.log(chatroom.id)
        chatroomsContent += "<div class='main-chatroom'><a href='/chatroom/" + chatroom.id + "'>" + chatroom.name + "</a></div>"
      }
      document.querySelector("#main-chatrooms").innerHTML = document.querySelector("#main-chatrooms").innerHTML.replace(document.querySelector("#main-chatrooms").innerHTML, chatroomsContent)
    }
  }
</script>

<style>
  /*sm => Smartphones*/
	@media (max-width: 767.98px) {

		#main {
			width: 98vw;
			height: 98vh;
			border-radius: 3vw;
			box-shadow: 0 1.5vw 9vw rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(0.3vw);
			-webkit-backdrop-filter: blur(0.3vw);
		}
		#main-top {
			border-radius: 3vw 3vw 0 0;
			font-size: 7.5vw;
			padding: 2vw 4vw 2vw 4vw;
		}

		#main-chatrooms {
			height: calc(85vh - 10vw);
			padding: 3.75vh 5vw 3.75vh 5vw;
			font-size: 4.5vw;
		}
		#main-input {
			border-radius: 0 0 3vw 3vw;
			padding: 2vh 6vw 2vh 6vw;
			font-size: 6vw;
			width: 100%;
		}
		#message-main-input {
			border-radius: 3vw;
		}
		#main-input > button {
			padding: 1.5vw 3vw 1.5vw 3vw;
			border-radius: 3vw;
		}
  }
  /*md to lg => Tablets*/
  @media (min-width: 768px) and (max-width: 1199.98px) {
		#main {
			width: 94vw;
			height: 94vh;
			border-radius: 1.5vw;
			box-shadow: 0 0.75vw 4.5vw rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(0.15vw);
			-webkit-backdrop-filter: blur(0.15vw);
		}
		#main-top {
			border-radius: 1.5vw 1.5vw 0 0;
			font-size: 3.75vw;
			padding: 1.5vw 3vw 1.5vw 3vw;
		}

		#main-chatrooms {
			height: calc(90vh - 10vw);
			padding: 7.5vh 3.75vw 7.5vh 3.75vw;
			font-size: 2.25vw;
		}
		#main-input {
			border-radius: 0 0 1.5vw 1.5vw;
			padding: 2vh 3vw 2vh 3vw;
			font-size: 3vw;
			width: 100%;
		}
		#message-main-input {
			border-radius: 1.5vw;
		}
		#main-input > button {
			padding: 0.75vw 1.5vw 0.75vw 1.5vw;
			border-radius: 1.5vw;
		}
	}
  /*xl to xxl => Desktops, TV*/
  @media (min-width: 1200px) {

		#main {
			width: 90vw;
			height: 90vh;
			border-radius: 1vw;
			box-shadow: 0 0.5vw 3vw rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(0.1vw);
			-webkit-backdrop-filter: blur(0.1vw);
		}
		#main-top {
			border-radius: 1vw 1vw 0 0;
			font-size: 2.5vw;
			padding: 1vw 2vw 1vw 2vw;
		}

		#main-chatrooms {
			height: calc(95vh - 10vw);
			padding: 10vh 5vw 10vh 5vw;
			font-size: 1.5vw;
		}
		#main-input {
			border-radius: 0 0 1vw 1vw;
			padding: 2vh 2vw 2vh 2vw;
			font-size: 2vw;
			width: 100%;
		}
		#message-main-input {
			border-radius: 1vw;
		}
		#main-input > button {
			padding: 0.5vw 1vw 0.5vw 1vw;
			border-radius: 1vw;
		}
  }

	#bg-main {
		background-image: url('/images/main-background.jpg');
		background-size: cover;
		height: 100vh;
	}
	#main {
		background: rgba(0, 0, 0, 0.85);
	}
	#main-top {
		background: #1A1A1A;
		color: #FF3333;
	}
	#title-main-top {
		max-width: 80%;
		-webkit-line-clamp: 1;
  	overflow: hidden;
  	display: -webkit-box;
  	-webkit-box-orient: vertical;
	}

	#main-chatrooms {
		overflow: auto;
		-ms-overflow-style: none;
  		scrollbar-width: none; 
	}
	#main-chatrooms::-webkit-scrollbar {
		display: none;
	}
	#main-input {
		position: absolute;
		bottom: 0;
		background: #1A1A1A;
	}
	#main-input > button:hover, #main-top > button:hover {
		background: #333333;
	}
	#main-input > button:active, #main-top > button:active {
		color: white;
	}
	#message-main-input {
		border: 0;
		background: #1A1A1A;
		color: white;
		width: 80%;
	}
	#message-main-input::placeholder, #main-input > button {
		color: #FF3333;
    line-height: 1.1;
	}
</style>