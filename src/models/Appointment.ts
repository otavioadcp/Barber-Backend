import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    provider: string;

    @Column('timestamp with time zone')
    date: Date;

    //Removido pois com o uso do TypeOrm, o constructor eh criado automatico quando criamos uma Entity do typeorm
    // constructor({ provider, date }: Omit<Appointment, 'id'>) {
    //     this.id = uuid();
    //     this.provider = provider;
    //     this.date = date;
    // }
}

export default Appointment;
