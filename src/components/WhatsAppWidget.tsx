
import { useState } from 'react';
import { MessageCircle, X, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+15551234567";
  const message = "Hi! I'm interested in learning more about your school travel packages.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessengerClick = () => {
    const messengerUrl = `https://m.me/jayvtravel`;
    window.open(messengerUrl, '_blank');
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://ig.me/m/jayvtravel`;
    window.open(instagramUrl, '_blank');
  };

  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/jayvtravel`;
    window.open(telegramUrl, '_blank');
  };

  const chatOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: handleWhatsAppClick,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Chat on WhatsApp'
    },
    {
      name: 'Messenger',
      icon: Facebook,
      action: handleMessengerClick,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Message on Facebook'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      action: handleInstagramClick,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      description: 'DM on Instagram'
    },
    {
      name: 'Telegram',
      icon: Send,
      action: handleTelegramClick,
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Chat on Telegram'
    }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/jayvtravel',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/jayvtravel',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/@jayvtravel',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 max-w-sm animate-scale-in">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Jay V Travel's</h4>
                <p className="text-xs text-green-500">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Hi there! 👋 Need help planning your school trip? Choose your preferred way to chat with us!
          </p>
          
          <div className="space-y-2 mb-4">
            {chatOptions.map((chat) => (
              <button
                key={chat.name}
                onClick={chat.action}
                className={`w-full ${chat.color} text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium flex items-center space-x-2`}
              >
                <chat.icon className="h-4 w-4" />
                <span>{chat.description}</span>
              </button>
            ))}
          </div>
          
          <div className="border-t pt-3">
            <p className="text-xs text-gray-500 mb-2">Follow us:</p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-2 rounded-full transition-all duration-300 hover:scale-110`}
                  title={social.name}
                >
                  <social.icon className="h-3 w-3 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-500' : 'bg-primary pulse-glow'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
