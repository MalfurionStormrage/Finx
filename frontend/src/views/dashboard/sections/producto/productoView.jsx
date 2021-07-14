import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import producto, { deleteProductos } from './producto';
import SpinnerTwo from '../../../../components/SpinnerTwo';
import Modal from '../../../../components/productos/Modal';
import ModalEdit from '../../../../components/productos/ModalEdit';
import IconRemover from '../../../../components/icons/IconRemover';

export default function productoView() {

    const [loading, setLoadings] = useState(true);
    const [listaProdtucos, setListaProdtucos] = useState([]);
    const { token } = useSelector(state => state.persistedReducer.auth);

    const cargarDatos = async () => {
        const { listProductos } = await producto.getProductos(token);
        setListaProdtucos([]);

        listProductos.map(({ _id, nombre, descripcion, precio, createdAt }) => {
            const btnEditar = React.createElement('div', {}, <ModalEdit _id={_id} nombre={nombre} descripcion={descripcion} precio={precio} token={token} cargarDatos={cargarDatos} />)
            const btnRemover = React.createElement('div', {}, <button className="p-2 bg-red-600 border-2 border-red-700 text-white rounded-full sm:rounded" onClick={() => RemoverProducto(_id, token, nombre)} aria-label="Borrar producto">
                <IconRemover />
            </button>)
            const fecha = createdAt.split('T');
            setListaProdtucos((preState) => [...preState, { fecha: fecha[0], _id, nombre, descripcion, precio, editar: btnEditar, remover: btnRemover }]);
        });

        setLoadings(false);
    }

    const RemoverProducto = async (id, token, nombre) => {
        Swal.fire({
            title: `Eliminar ${nombre}`,
            icon: "warning",
            text: "Esta acción es irreversible.",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Cancelar",
            confirmButtonText: "¡Si, Eliminar el registro!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteProductos(id, token);
                await cargarDatos();
            }
        });
    }

    const columns = [
        {
            name: 'Fecha de creación',
            selector: (state) => state.fecha,
            sortable: true,
            right: false
        },
        {
            name: 'Identificación',
            selector: (state) => state._id,
            sortable: true,
            right: false
        },
        {
            name: 'Nombre',
            selector: (state) => state.nombre,
            sortable: true,
            right: false
        },
        {
            name: 'Descripción',
            selector: (state) => state.descripcion,
            sortable: true,
            right: false
        },
        {
            name: 'Precio',
            selector: (state) => state.precio,
            sortable: true,
            right: false
        },
        {
            name: 'Editar',
            selector: (state) => state.editar,
            sortable: true,
            right: true
        },
        {
            name: 'Remover',
            selector: (state) => state.remover,
            sortable: true,
            right: false
        }

    ];

    useEffect(() => {
        cargarDatos();
        return () => null
    }, []);

    return (
        <>
            {
                loading ? <SpinnerTwo /> :
                    <div className="w-full">
                        <DataTable
                            pagination={true}
                            columns={columns}
                            subHeader={true}
                            fixedHeader={false}
                            data={listaProdtucos}
                            highlightOnHover={true}
                            subHeaderComponent={<Modal token={token} cargarDatos={cargarDatos} />}
                            title="Gestión de productos."
                            paginationPerPage={7}
                            paginationRowsPerPageOptions={[7, 10, 15, 20, 25, 30]}
                        />
                    </div>
            }
        </>
    )
}