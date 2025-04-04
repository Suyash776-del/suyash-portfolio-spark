
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="relative bg-card rounded-lg shadow-lg w-[350px] h-[500px] sm:w-[380px] sm:h-[600px] overflow-hidden animate-scale-in">
          <div className="bg-primary p-3 flex justify-between items-center">
            <h3 className="text-primary-foreground font-medium">Suyash's Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-primary-foreground hover:bg-primary/90">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="h-[calc(100%-48px)]">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/xi7xMZiabxJ_kSdpF2Q7g"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Chatbot"
              className={`${theme === 'dark' ? 'invert-colors' : ''}`}
            ></iframe>
          </div>
        </div>
      ) : (
        <Button 
          onClick={toggleChat}
          className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center animate-bounce hover:animate-none"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBubble;
