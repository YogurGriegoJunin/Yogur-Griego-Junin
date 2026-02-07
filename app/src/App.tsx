import { useEffect, useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Clock, 
  Heart, 
  Leaf, 
  Award, 
  ChevronRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Productos', id: 'productos' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-emerald-800' : 'text-emerald-800'}`}>
                Yogur Griego Junin
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Hacer Pedido
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t mt-3">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-3"
              >
                Hacer Pedido
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-yogurt.jpg"
            alt="Yogur Griego Artesanal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>100% Natural y Artesanal</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Venta exclusiva en Junín, Buenos Aires</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Yogur Griego <br />
                <span className="text-gradient">Sin Azúcar</span> <br />
                Hecho en Junín
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Fabricamos todos los días yogur griego artesanal sin azúcar, 
                sin conservantes y sin ningún tipo de agregados. 
                La mejor calidad para tu salud.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('contacto')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hacer Pedido
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('productos')}
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  Ver Productos
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center">
                        <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+1,300</p>
                    <p className="text-sm text-gray-500">Clientes felices</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div>
                  <p className="font-semibold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500">Natural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <Leaf className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Sin Conservantes</p>
            </div>
            <div className="text-white">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Sin Azúcar</p>
            </div>
            <div className="text-white">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Alta Calidad</p>
            </div>
            <div className="text-white">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Fresco Diario</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-200 rounded-full opacity-50" />
              <img
                src="/about-yogurt.jpg"
                alt="Elaboración artesanal"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Tradición y Calidad en Cada Porción
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                En Yogur Griego Junin nos dedicamos a fabricar diariamente el mejor 
                yogur griego artesanal de la región. Nuestro compromiso es ofrecer 
                un producto 100% natural, sin azúcar añadida, sin conservantes y 
                sin ningún tipo de agregados químicos.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Somos la opción de Yogurt Griego Junín con la mejor calidad. 
                Cada bote es elaborado con dedicación y los mejores ingredientes 
                para garantizar un producto fresco, saludable y delicioso.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Elaboración diaria',
                  'Ingredientes naturales',
                  'Sin aditivos',
                  'Producción local'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Nuestros Productos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Yogur Griego Natural
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Disfruta de nuestro yogur griego artesanal, elaborado diariamente 
              con los más altos estándares de calidad.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mt-4">
              <AlertCircle className="w-4 h-4" />
              <span>Venta exclusiva en Junín, Buenos Aires</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 - Presentación */}
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/product-line.jpg"
                  alt="Frasco de vidrio retornable"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  390g
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Frasco de Vidrio Retornable
                </h3>
                <p className="text-gray-600 mb-4">
                  Nuestro yogur griego se vende exclusivamente en frascos de vidrio 
                  retornables de 390 gramos. Cuidamos el medio ambiente mientras 
                  disfrutas de la mejor calidad.
                </p>
                <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>Ecológico y sustentable</span>
                </div>
              </CardContent>
            </Card>

            {/* Promo Card 1 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow border-2 border-emerald-200">
              <div className="relative overflow-hidden">
                <img
                  src="/product-bowl.jpg"
                  alt="Promoción 2 potes"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  PROMO
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2 Potes + Frascos
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-emerald-600">$16.000</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprando dos potes de yogur griego incluyendo los frascos de vidrio.
                </p>
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Pedir Promo
                </Button>
              </CardContent>
            </Card>

            {/* Promo Card 2 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow border-2 border-emerald-200">
              <div className="relative overflow-hidden">
                <img
                  src="/hero-yogurt.jpg"
                  alt="Promoción con frascos"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  PROMO
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  ENVÍO GRATIS
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2 Potes - Entregando Frascos
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-emerald-600">$14.000</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Entregando los frascos de vidrio retornables. Incluye envío sin cargo dentro de Junín.
                </p>
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Pedir Promo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info Banner */}
          <div className="mt-12 bg-emerald-50 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Envío sin cargo</p>
                  <p className="text-gray-600">Dentro de Junín, Buenos Aires</p>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-emerald-200" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Frascos retornables</p>
                  <p className="text-gray-600">390 gramos cada uno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              ¿Por Qué Elegir Nuestro Yogur?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Sin Azúcar',
                description: 'Ideal para quienes cuidan su salud y siguen dietas bajas en azúcar.'
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: '100% Natural',
                description: 'Sin conservantes ni aditivos artificiales de ningún tipo.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Alto en Proteínas',
                description: 'El yogur griego tiene el doble de proteínas que el yogur regular.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Fresco Diario',
                description: 'Fabricamos todos los días para garantizar la máxima frescura.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-emerald-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'María G.',
                text: 'El mejor yogur griego que he probado en Junín. Me encanta que sea sin azúcar y natural. Lo recomiendo totalmente.',
                rating: 5
              },
              {
                name: 'Carlos R.',
                text: 'Excelente calidad y sabor. Lo uso todos los días en mi desayuno con frutas. Muy buen producto local.',
                rating: 5
              },
              {
                name: 'Ana L.',
                text: 'Por fin un yogur griego realmente saludable. Sin químicos, sin azúcar. Perfecto para toda la familia.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Contacto
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Haz Tu Pedido Hoy
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Contáctanos para hacer tu pedido o resolver cualquier duda. 
                Estamos aquí para brindarte el mejor yogur griego de Junín.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-lg text-amber-800 text-sm font-medium mb-8">
                <AlertCircle className="w-4 h-4" />
                <span>Venta exclusiva dentro de Junín, Buenos Aires</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+54 236 420-6562</p>
                    <p className="text-gray-600">+54 9 236 420-6562</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600">Junín, Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario</h3>
                    <p className="text-gray-600">Lunes a Sábado</p>
                    <p className="text-gray-600">Horario comercial</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Instagram</h3>
                    <a 
                      href="https://instagram.com/yogur.griego.junin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      @yogur.griego.junin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Para realizar pedidos o consultas, puedes contactarnos directamente 
                  a través de WhatsApp o llamarnos por teléfono.
                </p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://wa.me/5492364206562"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6">
                      <Phone className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+542364206562">
                    <Button variant="outline" className="w-full py-6 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                      <Phone className="w-5 h-5 mr-2" />
                      Llamar Ahora
                    </Button>
                  </a>
                </div>
                <div className="mt-6 p-4 bg-amber-100 rounded-xl border border-amber-200">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-700" />
                    <p className="text-amber-800 text-sm font-medium text-center">
                      Venta exclusiva en Junín, Buenos Aires
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Yogur Griego Junin</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Fabricamos todos los días yogur griego artesanal sin azúcar, 
                sin conservantes y sin ningún tipo de agregados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61566835996718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/yogur.griego.junin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Yogur Griego Junin. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
