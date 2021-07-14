import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import producto from '../producto/producto';
import index from '../../../../data/MOCK_DATA.json';
import SpinnerTwo from '../../../../components/SpinnerTwo';
import { Bar, Pie, PolarArea, Radar } from 'react-chartjs-2';

export default function chartsView() {

    const [dat, setDat] = useState([]);
    const [dat2, setDat2] = useState([]);
    const [labe, setLabel] = useState([]);
    const [labe2, setLabel2] = useState([]);
    const [loading, setLoadings] = useState(true);
    const { token } = useSelector(state => state.persistedReducer.auth);
    const cargarDatos = async () => {
        const { listProductos } = await producto.getProductos(token);
        await listProductos.map(({ nombre, precio }) => {
            setLabel(preLabel => [...preLabel, nombre])
            setDat(prevDat => [...prevDat, precio])
        });

        await index.map(({ producto, precio }) => {
            setLabel2(preLabel2 => [...preLabel2, producto])
            setDat2(prevDa2 => [...prevDa2, precio])
        });

        setLoadings(false);
    }

    useEffect(() => {
        cargarDatos();
        return () => null
    }, [])

    const data = {
        labels: labe,
        datasets: [
            {
                label: 'precios',
                data: dat,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
        options: {
            spanGaps: true,
            interaction: {
                // Overrides the global setting
                mode: 'index',
                responsive: true,
            },

            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            }
        }
    };

    const data2 = {
        labels: labe2,
        datasets: [
            {
                label: 'precio',
                data: dat2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
        options: {
            spanGaps: true,
            interaction: {
                // Overrides the global setting
                mode: 'index',
                responsive: true,
            },
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            }
        }
    };

    return (
        <>
            {
                loading ? <SpinnerTwo /> :
                    <div>
                        <div className="text-center my-4">
                            <h1 className="font-bold text-4xl">Gráficos</h1>
                        </div>
                        <div className="text-left">
                            <h2 className="font-bold text-lg"> Datos random. </h2>
                        </div>
                        <div className="w-full shadow full my-4 p-2">
                            <Bar data={data2} width={100} height={25} />
                        </div>
                        <div className="text-left">
                            <h2 className="font-bold text-lg"> Precio de productos. </h2>
                        </div>
                        <div className="w-full shadow p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            <div className="m-1 sm:col-span-2 sm:order-3 md:order-1 md:col-span-1">
                                <Pie data={data} width={80} height={10} />
                            </div>
                            <div className="m-1">
                                <PolarArea data={data} width={80} height={10} />
                            </div>
                            <div className="m-1">
                                <Radar data={data} width={80} height={10} />
                            </div>
                        </div>
                    </div>
            }
        </>
    )

}