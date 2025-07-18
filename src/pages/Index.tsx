import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      title: 'Комплект для подготовки к ОГЭ по математике',
      price: '2 990 ₽',
      image: '/img/71d1993c-46d3-4dba-b29e-9bc70e594101.jpg',
      subjects: ['Математика'],
      type: 'ОГЭ',
      description: 'Полный комплект материалов для успешной подготовки'
    },
    {
      id: 2,
      title: 'Набор для подготовки к ЕГЭ по русскому языку',
      price: '3 590 ₽',
      image: '/img/8fbe6a90-bb70-422e-87ba-be7f58d223f0.jpg',
      subjects: ['Русский язык'],
      type: 'ЕГЭ',
      description: 'Эффективные материалы для высоких баллов'
    },
    {
      id: 3,
      title: 'Универсальный комплект ЕГЭ',
      price: '4 990 ₽',
      image: '/img/f4ee458b-b19b-424e-842b-d03300c0fdbe.jpg',
      subjects: ['Математика', 'Русский язык', 'Обществознание'],
      type: 'ЕГЭ',
      description: 'Все необходимое для поступления в вуз'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      role: 'Мама выпускника',
      text: 'Благодаря материалам MAXIMUM мой сын повысил балл по математике с 60 до 85! Очень довольны результатом.',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Выпускник 2024',
      text: 'Поступил в МГУ! Комплект для подготовки к ЕГЭ помог структурировать знания и уверенно сдать экзамены.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      role: 'Учитель',
      text: 'Рекомендую всем своим ученикам. Качественные материалы, экологичная упаковка, отличный результат.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-secondary">MAXIMUM Education</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#products" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#oge" className="text-gray-600 hover:text-primary transition-colors">ОГЭ</a>
              <a href="#ege" className="text-gray-600 hover:text-primary transition-colors">ЕГЭ</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-secondary mb-6">
              Качественные материалы для подготовки к ОГЭ и ЕГЭ
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Экологически чистые упаковки с информативными материалами от MAXIMUM Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Book" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Наши товары</h3>
            <p className="text-gray-600">Выберите подходящий комплект для успешной подготовки</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="oge">ОГЭ</TabsTrigger>
              <TabsTrigger value="ege">ЕГЭ</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-2">
                        <Badge variant={product.type === 'ОГЭ' ? 'secondary' : 'default'}>
                          {product.type}
                        </Badge>
                        {product.subjects.map((subject) => (
                          <Badge key={subject} variant="outline">{subject}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg mb-2">{product.title}</CardTitle>
                      <CardDescription className="mb-4">{product.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button>
                          <Icon name="Plus" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="oge">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.filter(p => p.type === 'ОГЭ').map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">{product.type}</Badge>
                        {product.subjects.map((subject) => (
                          <Badge key={subject} variant="outline">{subject}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg mb-2">{product.title}</CardTitle>
                      <CardDescription className="mb-4">{product.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button>
                          <Icon name="Plus" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ege">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.filter(p => p.type === 'ЕГЭ').map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="default">{product.type}</Badge>
                        {product.subjects.map((subject) => (
                          <Badge key={subject} variant="outline">{subject}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg mb-2">{product.title}</CardTitle>
                      <CardDescription className="mb-4">{product.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button>
                          <Icon name="Plus" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Почему выбирают нас</h3>
            <p className="text-gray-600">Качество и забота об окружающей среде</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Экологически чистые материалы</h4>
              <p className="text-gray-600">Используем только переработанную бумагу и биоразлагаемые упаковки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Высокое качество</h4>
              <p className="text-gray-600">Материалы проверены экспертами и показывают отличные результаты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Info" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Информативность</h4>
              <p className="text-gray-600">Подробная информация о содержании на каждой упаковке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Отзывы наших клиентов</h3>
            <p className="text-gray-600">Узнайте, что говорят ученики и родители о наших материалах</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-xl mb-8">Готовы помочь вам выбрать подходящие материалы для подготовки</p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Icon name="Phone" size={24} className="mx-auto mb-2" />
                <p>+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" size={24} className="mx-auto mb-2" />
                <p>info@maximum-education.ru</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={24} className="mx-auto mb-2" />
                <p>Москва, ул. Образования, 1</p>
              </div>
            </div>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold text-secondary">MAXIMUM Education</span>
            </div>
            <p className="text-gray-600">© 2024 MAXIMUM Education. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;