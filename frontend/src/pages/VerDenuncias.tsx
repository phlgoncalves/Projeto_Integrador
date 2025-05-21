// import Footer from "../components/Footer";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../components/ui/select";
// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Search,
//   MapPin,
//   Calendar,
//   Filter,
//   ArrowUpDown,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";




// const VerDenuncias: React.FC = () => {
//   const denuncias = [
//     {
//       id: "1",
//       data: "14/05/2025",
//       endereco: "Rua das Flores, 123",
//       bairro: "Centro",
//       cidade: "São Paulo",
//       estado: "SP",
//       descricao:
//         "Água parada em pneus abandonados no terreno ao lado da residência.",
//       status: "Em análise",
//     },
//     {
//       id: "2",
//       data: "13/05/2025",
//       endereco: "Av. Principal, 456",
//       bairro: "Jardim América",
//       cidade: "Rio de Janeiro",
//       estado: "RJ",
//       descricao: "Caixa d'água sem tampa em estabelecimento comercial.",
//       status: "Concluída",
//     },
//     {
//       id: "3",
//       data: "12/05/2025",
//       endereco: "Rua dos Ipês, 789",
//       bairro: "Vila Nova",
//       cidade: "Belo Horizonte",
//       estado: "MG",
//       descricao: "Calhas entupidas com água parada há vários dias.",
//       status: "Em atendimento",
//     },
//     {
//       id: "4",
//       data: "11/05/2025",
//       endereco: "Travessa das Acácias, 234",
//       bairro: "Jardim Botânico",
//       cidade: "Curitiba",
//       estado: "PR",
//       descricao:
//         "Vasos de plantas com pratos acumulando água no jardim da praça.",
//       status: "Concluída",
//     },
//     {
//       id: "5",
//       data: "10/05/2025",
//       endereco: "Alameda dos Anjos, 567",
//       bairro: "Boa Viagem",
//       cidade: "Recife",
//       estado: "PE",
//       descricao:
//         "Lixo acumulado em terreno baldio com recipientes que acumulam água.",
//       status: "Em análise",
//     },
//     {
//       id: "6",
//       data: "09/05/2025",
//       endereco: "Rua das Palmeiras, 890",
//       bairro: "Itaim Bibi",
//       cidade: "São Paulo",
//       estado: "SP",
//       descricao: "Piscina abandonada sem tratamento em casa desocupada.",
//       status: "Em atendimento",
//     },
//   ];

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Concluída":
//         return "bg-green-100 text-green-800 hover:bg-green-200";
//       case "Em atendimento":
//         return "bg-primary-100 text-primary-800 hover:bg-primary-200";
//       case "Em análise":
//       default:
//         return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
//     }
//   };

//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />

//       <div className="bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-primary-900 mb-4">
//               Denúncias Realizadas
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Confira todas as denúncias de focos do mosquito da dengue já
//               realizadas em nossa plataforma e acompanhe o status de cada uma.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
//             <div className="flex flex-col md:flex-row gap-4 mb-6">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <Input
//                   placeholder="Buscar por endereço, bairro ou cidade..."
//                   className="pl-10 border-primary-200 focus-visible:ring-primary-500"
//                 />
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Select>
//                   <SelectTrigger className="w-full sm:w-[180px] border-primary-200">
//                     <div className="flex items-center">
//                       <Filter className="mr-2 h-4 w-4 text-primary-500" />
//                       <SelectValue placeholder="Status" />
//                     </div>
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="todos">Todos</SelectItem>
//                     <SelectItem value="em-analise">Em análise</SelectItem>
//                     <SelectItem value="em-atendimento">Em atendimento</SelectItem>
//                     <SelectItem value="concluida">Concluída</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Select>
//                   <SelectTrigger className="w-full sm:w-[180px] border-primary-200">
//                     <div className="flex items-center">
//                       <ArrowUpDown className="mr-2 h-4 w-4 text-primary-500" />
//                       <SelectValue placeholder="Ordenar por" />
//                     </div>
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="recentes">Mais recentes</SelectItem>
//                     <SelectItem value="antigas">Mais antigas</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <Badge className="bg-primary-50 text-primary-700 hover:bg-primary-100 cursor-pointer">
//                 São Paulo
//               </Badge>
//               <Badge className="bg-primary-50 text-primary-700 hover:bg-primary-100 cursor-pointer">
//                 Rio de Janeiro
//               </Badge>
//               <Badge className="bg-primary-50 text-primary-700 hover:bg-primary-100 cursor-pointer">
//                 Últimos 7 dias
//               </Badge>
//               <Badge className="bg-primary-50 text-primary-700 hover:bg-primary-100 cursor-pointer">
//                 Concluídas
//               </Badge>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {denuncias.map((denuncia) => (
//               <Card
//                 key={denuncia.id}
//                 className="overflow-hidden hover:shadow-md transition-shadow"
//               >
//                 <CardContent className="p-0">
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <Badge className={getStatusColor(denuncia.status)}>
//                         {denuncia.status}
//                       </Badge>
//                       <span className="text-sm text-gray-500 flex items-center">
//                         <Calendar className="h-4 w-4 mr-1" />
//                         {denuncia.data}
//                       </span>
//                     </div>
//                     <h3 className="font-semibold text-lg mb-2 text-primary-900">
//                       Denúncia #{denuncia.id}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-2">
//                       {denuncia.descricao}
//                     </p>
//                     <div className="flex items-start text-sm text-gray-500 mb-2">
//                       <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary-500" />
//                       <span>
//                         {denuncia.endereco}, {denuncia.bairro}
//                       </span>
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       {denuncia.cidade} - {denuncia.estado}
//                     </div>
//                   </div>
//                   <div className="border-t border-gray-100 p-4 bg-gray-50">
//                     <Link to={`/denuncias/${denuncia.id}`}>
//                       <Button
//                         variant="ghost"
//                         className="w-full text-primary-600 hover:text-primary-700 hover:bg-primary-50"
//                       >
//                         Ver detalhes
//                       </Button>
//                     </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="mt-12 flex justify-center">
//             <div className="flex space-x-2">
//               <Button
//                 variant="outline"
//                 className="border-primary-200 text-primary-700 hover:bg-primary-50"
//                 disabled
//               >
//                 Anterior
//               </Button>
//               <Button className="border-primary-200 bg-primary-50 text-primary-800" variant="outline">
//                 1
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-primary-200 text-primary-700 hover:bg-primary-50"
//               >
//                 2
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-primary-200 text-primary-700 hover:bg-primary-50"
//               >
//                 3
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-primary-200 text-primary-700 hover:bg-primary-50"
//               >
//                 Próxima
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default VerDenuncias;